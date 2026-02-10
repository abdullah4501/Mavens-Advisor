import { useState } from "react";

const BlogReplyForm = () => {
  const [saveInfo, setSaveInfo] = useState(false);

  return (
    <div className="mt-12">
      <h3 className="text-[40px] font-bold text-foreground mb-[15px]">Leave a Reply</h3>
      <p className="text-[18px] text-muted-foreground mb-6 mt-[20px]">
        Your email address will not be published. Required fields are marked *
      </p>

      <form className="">
        <div className="mb-5">
          <label className="text-[16px] text-foreground font-semibold block mb-4">
            Comment *
          </label>
          <textarea
            rows={6}
            className="w-full border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="">
            <label className="text-[16px] text-foreground font-semibold block mb-4">
              Name *
            </label>
            <input
              type="text"
              className="w-full border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <div className="">
            <label className="text-[16px] text-foreground font-semibold block mb-4">
              Email *
            </label>
            <input
              type="email"
              className="w-full border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <div className="">
            <label className="text-sm text-foreground font-semibold block mb-4">
              Website
            </label>
            <input
              type="url"
              className="w-full border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
        </div>

        <label className="flex mt-[20px] items-center gap-2 text-[16px] text-muted-foreground cursor-pointer">
          <input
            type="checkbox"
            checked={saveInfo}
            onChange={(e) => setSaveInfo(e.target.checked)}
            className="accent-gold w-4 h-4"
          />
          Save my name, email, and website in this browser for the next time I comment.
        </label>

        <button
          type="submit"
          className="bg-gold text-white mt-[40px] px-6 py-3 text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default BlogReplyForm;
