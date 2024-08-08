"use client";
import { CommentProps } from "@/libs/types";
export default function Comment({
   userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}: CommentProps) {
  return (
    <div>
      your code for Comment component here ...
      {/* You can use map-loop to render Reply component here */}
    
    </div>
  );
}
