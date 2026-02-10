import { Search } from "lucide-react";
import teamMeetingImage from '@/assets/team-meeting.jpg';

const categories = [
    "Accounting",
    "Audit Guidance",
    "Consulting",
    "Finance",
    "Tax Planning",
    "Uncategorized",
];

const latestPosts = [
    {
        title: "Choosing The Right Accounting Software For Tax",
        date: "June 15, 2023",
        image: teamMeetingImage,
    },
    {
        title: "Why Financial Forecasting & Accounting Matters For Tax",
        date: "June 15, 2023",
        image: teamMeetingImage,
    },
    {
        title: "Financial Strategies For Sustainable Growth",
        date: "June 15, 2023",
        image: teamMeetingImage,
    },
    {
        title: "How To Choose The Right Accounting Matters For Tax",
        date: "June 15, 2023",
        image: teamMeetingImage,
    },
];

const tags = [
    "Consulting",
    "Accounting",
    "Finance",
    "Business",
    "Tax Planning",
    "Investment",
];

const BlogSidebar = () => {
    return (
        <aside className="w-full">
            {/* Search */}
            <div className="bg-white p-[30px] mb-[30px] rounded-[20px]">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-full border-0 h-[54px] bg-[#f7f7f7] rounded-[5px] px-[30px] py-0 pr-12 text-[15px] text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                    <button className="absolute w-[54px] h-[54px] right-0 top-0 h-full px-[11px] py-[5px] bg-gold text-white rounded-r-[5px] flex items-center justify-center">
                        <Search className="w-[20px] h-[20px]" />
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className=" p-[30px] mb-[30px] rounded-[20px] bg-white">
                <h3 className="text-[24px] font-bold text-foreground mb-4">Categories</h3>
                <ul className="space-y-3">
                    {categories.map((cat) => (
                        <li key={cat} className="border-b border-[#d9d9d980] text-[18px] font-bold pb-[24px] pt-[12px] last:border-0">
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-gold transition-colors "
                            >
                                {cat}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Latest */}
            <div className=" p-[30px] mb-[30px] rounded-[20px] bg-white">
                <h3 className="text-[24px] font-bold text-foreground mb-4">Latest Posts</h3>
                <div className="flex flex-col gap-8">
                    {latestPosts.map((post, index) => (
                        <div
                            className="flex items-start gap-5 border-b border-gray-200 pb-8 last:border-b-0 last:pb-0 cursor-pointer group"
                        >
                            {/* Thumbnail */}
                            <div className="relative min-w-[100px] w-[100px] h-[100px] rounded-lg overflow-hidden flex-shrink-0 ">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 text-[13px] text-muted-foreground font-semibold uppercase mb-2">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                                    <span>By Gudfin</span>
                                </div>

                                <h4 className="text-[17px] font-bold text-navy leading-snug">
                                    {post.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Tags */}
            <div className="p-[30px] mb-[30px] rounded-[20px] bg-white">
                <h3 className="text-lg font-bold text-foreground mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <a
                            key={tag}
                            href="#"
                            className="px-[12px] py-[10px] text-[16px] text-muted-foreground bg-muted hover:bg-gold hover:text-white hover:border-gold transition-colors rounded-[5px] font-medium"
                        >
                            {tag}
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default BlogSidebar;
