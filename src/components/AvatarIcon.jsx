import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const AvatarIcon = ({ src, alt, className }) => {
  return (
    <Avatar className={`w-12 h-12 ${className}`}>
      <AvatarImage
        src={src || "https://github.com/shadcn.png"}
        alt={alt || "@shadcn"}

      />
      <AvatarFallback>{alt || "@shadcn"}</AvatarFallback>
    </Avatar>
  )
}

export default AvatarIcon