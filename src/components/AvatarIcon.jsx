import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const AvatarIcon = ({ src, alt, className }) => {
  return (
    <Avatar className={`w-12 h-12 ${className}`}>
      <AvatarImage
        src={src || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"}
        alt={alt || "@shadcn"}

      />
      <AvatarFallback>{alt || "@shadcn"}</AvatarFallback>
    </Avatar>
  )
}

export default AvatarIcon