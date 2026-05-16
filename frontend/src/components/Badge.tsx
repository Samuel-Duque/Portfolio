interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
      {text}
    </span>
  );
}
