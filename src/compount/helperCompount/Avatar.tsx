 export default function Avatar({ className, children }) {
    return <div className="">
        <div className={`${className} rounded-full overflow-hidden`}>{children}</div>
    </div>;
  }