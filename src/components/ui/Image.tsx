import Info from "../icons/Info"

function Image({ size }: { size: number }) {

    const imageUrl = {
        '4': 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg',
        '5' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg',
        '6' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg',
        '8' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg',
        '10' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg',
        '12' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg',
        '14' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg',
        '16' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg',
        '20' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg',
        '40' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg',
    }
    return (
        <div className={`bg-gray-700 rounded-lg w-64 sm:w-80 xl:w-96 transition-all duration-300 relative `}>
            <div>
                <img src={imageUrl[size]} className={`rounded-lg`} alt="No preview" />
            </div>
            <div className={"top-0 left-0 absolute px-3 text-center py-2 rounded-full"} title={`${size} Yards`}><Info/></div>
        </div>
    )
}

export default Image