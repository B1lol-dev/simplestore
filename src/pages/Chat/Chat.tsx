import Container from "@/components/helpers/Container";
import LoaderFull from "@/components/loaders/LoaderFull";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFetch } from "@/hooks/useFetch";
import type { IUser } from "@/types/api";
import { fetchAI } from "@/utils/ai";
import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { MessageItem, type INewMessage } from "./components/MessageItem";

const Chat = () => {
  const params = useParams();
  const [messages, setMessages] = useState<INewMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [userStatus, setUserStatus] = useState("offline");

  const { data: user, error, loading } = useFetch<IUser>(`users/${params.id}`);
  console.log(JSON.stringify(user));

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    const newMessageObj = {
      id: uuidv4(),
      text: newMessage,
      isMine: true,
    };

    setMessages((prev) => [...prev, newMessageObj]);
    setUserStatus("online");
    setTimeout(() => {
      setUserStatus("typing...");

      fetchAI(
        newMessage,
        `Your info is ${JSON.stringify(
          user
        )}. ANSWER LIKE A REAL PERSON, IF USER TYPES YOU IN UZBEK REPLY IN UZBEK LANGUAGE, IF RUSSIAN REPLY IN RUSSIAN LANGUAGE, IF NOT REPLY WITH USERS LANGUAGE`
      ).then((res: string | null) => {
        if (res) {
          setMessages((prev) => [
            ...prev,
            {
              id: uuidv4(),
              text: res,
              isMine: false,
            },
          ]);

          setNewMessage("");
          setUserStatus("online");
        }
      });
    }, Math.random() * 2000);
  };

  if (loading) {
    return <LoaderFull />;
  }

  if (error) {
    return (
      <section>
        <Container>Something went wrong</Container>
      </section>
    );
  }

  return (
    <section>
      <Container className="flex max-w-3xl! flex-col items-baseline justify-between">
        <div className="mb-5 flex gap-3">
          <div className="rounded-full bg-card p-3 uppercase flex items-center justify-center">
            {user?.name.firstname.substring(0, 1)}
            {user?.name.lastname.substring(0, 1)}
          </div>
          <div>
            <h1 className="capitalize text-xl">
              {user?.name.firstname} {user?.name.lastname}
            </h1>
            <p>{userStatus}</p>
          </div>
        </div>
        <div className="flex h-[650px] flex-col gap-5 w-full mx-auto overflow-y-scroll">
          {messages.map((message) => (
            <MessageItem message={message} key={message.id} />
          ))}
        </div>
        <form
          className="mx-auto max-w-3xl w-full flex gap-0 mt-5"
          onSubmit={handleSendMessage}
        >
          <Input
            placeholder="Write a message..."
            className="w-full"
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <Button>
            <Send />
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default Chat;
