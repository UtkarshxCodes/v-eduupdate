import { FollowerPointerCard } from "../ui/following-pointer";

const events = [
  {
    author: "V-EDU",
    authorAvatar: "/fav.png",
    date: "March 2024",
    title: "Career Growth Happy Hour — Hosted by V-EDU",
    description:
      "V-EDU brought together 60+ students, alumni, and future career-switchers in Cheyenne, Wyoming for an inspiring evening of networking and growth. Alumni and mentors shared their journeys into tech, offering honest stories and practical strategies for breaking into Data Science, Cybersecurity, AI, and DevOps.",
    image: "https://tavitsphotography.com/wp-content/uploads/2021/11/Scottsdale-Corporate-Event-Photography.jpg",
  },
  {
    author: "V-EDU",
    authorAvatar: "/fav.png",
    date: "April 2024",
    title: "V-EDU 2024 In-Person Summit: Community. Connection. Careers.",
    description:
      "Our 2024 summit united learners, graduates, and industry professionals under one roof in Cheyenne. The event featured interactive workshops, live panels, and career-focused discussions designed to give attendees a competitive edge in the tech job market.",
    image: "https://workshift.bystadium.com/wp-content/uploads/2022/11/inperson-1024x580.png",
  },
  {
    author: "V-EDU",
    authorAvatar: "/fav.png",
    date: "May 2024",
    title: "V-EDU Tech Talks: Career Pivot 101 — Live in Wyoming!",
    description:
      "From alumni success stories to expert advice on navigating a tech career switch, V-EDU’s Tech Talks gathered students, grads, and professionals for an evening of insight and opportunity. The event highlighted real journeys into tech and opened doors for meaningful connections.",
    image: "https://tse3.mm.bing.net/th/id/OIP.jO9EtsYR24LiBizUd350QQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

export function FollowingPointerDemo() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        V-EDU Events: Past &amp; Upcoming
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {events.map((event, idx) => (
          <div key={idx} className="flex-1 min-w-[280px] max-w-sm mx-auto">
            <FollowerPointerCard
              title={
                <TitleComponent title={event.author} avatar={event.authorAvatar} />
              }>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
                  <img
                    src={event.image}
                    alt="thumbnail"
                    className="h-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                  />
                </div>
                <div className="p-4">
                  <h2 className="my-4 text-lg font-bold text-zinc-700">
                    {event.title}
                  </h2>
                  <h2 className="my-4 text-sm font-normal text-zinc-500">
                    {event.description}
                  </h2>
                  <div className="mt-10 flex flex-row items-center justify-between">
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>
        ))}
      </div>
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar
}) => (
  <div className="flex items-center space-x-2">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white" />
    <p>{title}</p>
  </div>
);
