export interface Category {
    id: number;
    topic: string;
    image: string;
}

const Category_Card = ({ topic, image }: Omit<Category, 'id'>) => {
    return (
        <div className="w-52 h-52 flex flex-col justify-center items-center rounded-lg">

            <div className="flex flex-col items-center grow justify-center">

                <div className="w-40 h-40 shrink-0 rounded-full border-gray-200 transition-transform duration-300 hover:scale-105 cursor-pointer m-1">
                    <img className="w-full h-full rounded-full object-cover border-2 border-blue-900 p-2.5" src={image} alt={topic} />
                </div>

                <div className="mt-2 flex justify-center text-center items-center ">
                    <h3 className="font-medium text-sm leading-tight text-white bg-blue-900  rounded-lg py-2 px-3">
                        {topic}
                    </h3>
                </div>

            </div>

        </div>
    )
}

export default Category_Card;
