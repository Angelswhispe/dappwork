export const PoweredBy: React.FC = () => {
  return (
    <div
      onClick={() => {
        window.open("https://webberland.org", "_blank");
      }}
      className="spacing-1 absolute bottom-4 right-4 flex cursor-pointer items-center"
    >
     <img
        className="h-4 w-6 object-contain"
        src="/logo.png"
        alt="test"
      />
    </div>
  );
};
