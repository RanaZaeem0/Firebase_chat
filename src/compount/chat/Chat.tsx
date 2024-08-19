import { log } from "console";
import { useSelector } from "react-redux";
import Avatar from "../helperCompount/Avatar";
import AvatarImage from "../helperCompount/AvatarImage";
import ChatSidebar from "./ChatSidebar";
export default function Chat() {

    const {status } = useSelector((state:any) => state?.auth)
    const userData = useSelector((state:any) => state?.auth.userData)
    
    return (
      <div className="grid bg-zinc-900 text-white min-h-screen w-full grid-cols-2">
        <ChatSidebar/>
        <div className="flex flex-col">
          <header className="flex h-[60px] items-center border-b bg-muted/40 px-6">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <div className="flex items-center justify-center h-full w-full bg-gray-200 text-gray-600">Jd</div>
              </Avatar>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-muted-foreground text-sm">Online</div>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button  className="h-8 w-8">
                {/* <PhoneIcon className="h-4 w-4" /> */}
                <span className="sr-only">Call</span>
              </button>
              <button  className="h-8 w-8">
                <VideoIcon className="h-4 w-4" />
                <span className="sr-only">Video Call</span>
              </button>
              <button  className="h-8 w-8">
                <MoveHorizontalIcon className="h-4 w-4" />
                <span className="sr-only">More</span>
              </button>
            </div>
          </header>
          <div className="flex-1 overflow-auto">
            <div className="grid gap-4 p-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <div className="flex items-center justify-center h-full w-full bg-gray-200 text-gray-600">Jd</div>
                </Avatar>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  <p>Hey there! How's it going?</p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <time dateTime="2023-08-15T12:34:56">12:34 PM</time>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="rounded-lg bg-primary p-3 text-sm text-primary-foreground">
                  <p>I'm doing great, thanks for asking!</p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <time dateTime="2023-08-15T12:35:12">12:35 PM</time>
                  </div>
                </div>
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <div className="flex items-center justify-center h-full w-full bg-gray-200 text-gray-600">Jd</div>
                </Avatar>
              </div>
              <div className="flex items-start gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <div className="flex items-center justify-center h-full w-full bg-gray-200 text-gray-600">Jd</div>
                </Avatar>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  <p>That's great to hear! I was wondering if you're free to grab coffee later?</p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <time dateTime="2023-08-15T12:36:02">12:36 PM</time>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="rounded-lg bg-primary p-3 text-sm text-primary-foreground">
                  <p>Absolutely! I'd love to. How about 3 PM?</p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <time dateTime="2023-08-15T12:36:24">12:36 PM</time>
                  </div>
                </div>
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <div className="flex items-center justify-center h-full w-full bg-gray-200 text-gray-600">Jd</div>
                </Avatar>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 bg-background px-4 py-2">
            <div className="relative">
              <textarea
                placeholder="Type your message..."
                className="min-h-[48px] w-full rounded-2xl text-black border border-neutral-400 bg-background p-4 pr-16 shadow-sm"
              />
              <button type="submit" className="absolute right-3 top-3">
                <SendIcon className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  


  

  
  function Badge({ className, children }) {
    return <span className={`${className} px-2 py-1 rounded-full text-xs`}>{children}</span>;
  }
  
  function MessageCircleIcon({ className }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 16.57c0 .76-.46 1.45-1.2 1.72-1.18.43-2.53.71-3.8.71a15.94 15.94 0 01-7.2-1.67 16.05 16.05 0 01-4.66-3.75 7.28 7.28 0 010-9.56 7.28 7.28 0 019.56 0 16.05 16.05 0 013.75 4.66c.31.61.53 1.25.67 1.91.14.67.29 1.36.29 2.05 0 .76-.14 1.5-.39 2.2zM12 18l-4.5-2.4c-.83-.44-1.69-.97-2.4-1.6l4.9-1.7 1.5-.8 1.5.8 4.9 1.7c-.71.63-1.57 1.16-2.4 1.6L12 18z" />
      </svg>
    );
  }
  
  function PlusIcon({ className }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    );
  }
  
  function PhoneIcon({ className }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5v2a15.93 15.93 0 005.66 10.36L11 17h2a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2h2a2 2 0 012-2h2.4l.6-.36A15.93 15.93 0 0017 7V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2z" />
      </svg>
    );
  }
  
  function VideoIcon({ className }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.5-3.6a1 1 0 011.5.84v8.52a1 1 0 01-1.5.84L15 14m0 4a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v8z" />
      </svg>
    );
  }
  
  function MoveHorizontalIcon({ className }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7h-5m-4 0H5" />
      </svg>
    );
  }
  
  function SendIcon({ className }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17.63V8a1 1 0 011-1h12.82a1 1 0 01.73 1.7l-7.82 7.83a1 1 0 01-1.41 0L4.27 17.07a1 1 0 01-.27-.7z" />
      </svg>
    );
  }
  