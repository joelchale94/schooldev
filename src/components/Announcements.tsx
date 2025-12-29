const announcements = [
    {
        id: 1,
        title: "Lorem ipsum",
        date: "2026-01-01",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 2,
        title: "Lorem ipsum",
        date: "2026-01-01",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 3,
        title: "Lorem ipsum",
        date: "2026-01-01",
        description: "Lorem ipsum dolor sit amet",
    },
];

const Announcements = () => {
    return (
        <div className='bg-white rounded-xl w-full p-4'>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400">View all</span>
            </div>
            <div className="flex flex-col gap-4 mt-2">
                {announcements.map(announ => (
                    <div className="bg-customPurpleLight rounded-md p-4" key={announ.id}>
                        <div className="flex items-center justify-between">
                            <h1 className="font-medium">{announ.title}</h1>
                            <span className="text-xs text-gray-400 px-1 py-1">{announ.date}</span>
                        </div>
                        <p className="mt-2 text-gray-600 text-sm">{announ.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;