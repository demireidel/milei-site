interface PullquoteProps {
  children: React.ReactNode;
  cite?: string;
}

export function Pullquote({ children, cite }: PullquoteProps) {
  return (
    <blockquote className="pullquote my-8">
      <p className="m-0">{children}</p>
      {cite && (
        <footer className="badge-text mt-2 not-italic opacity-70">
          {cite}
        </footer>
      )}
    </blockquote>
  );
}
