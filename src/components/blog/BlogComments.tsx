const comments = [
  {
    name: "Abdullah",
    date: "October 25, 2024 at 8:45 am",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    avatar: "A",
  },
  {
    name: "Abd",
    date: "October 25, 2024 at 8:45 am",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "A",
    isReply: true,
  },
];

const BlogComments = () => {
  return (
    <div className="mt-12">
      <h3 className="text-[24px] font-bold text-foreground mb-6 pb-[20px]  border-b border-border">
        2 Comments
      </h3>
      <div className="space-y-6">
        {comments.map((comment, i) => (
          <div
            key={i}
            className={`flex gap-4 ${comment.isReply ? "ml-12" : ""}`}
          >
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold flex-shrink-0">
              {comment.avatar}
            </div>
            <div className="flex-1 pb-[16px] border-b border-border">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-foreground text-[20px]">
                  {comment.name}
                </span>
              </div>
              <span className="text-[12px] font-bold text-muted-foreground block mb-2">
                {comment.date}
              </span>
              <p className="text-[18px] font-medium text-muted-foreground leading-relaxed">
                {comment.text}
              </p>
              <button className="mt-2 text-[12px] mt-[20px] font-semibold bg-gold text-white px-4 py-1 rounded-sm hover:opacity-90 transition-opacity">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComments;
