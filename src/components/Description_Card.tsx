import type { ReactNode } from "react";

export interface Card {
  id: number;
  text: string;
  image: string; // Big header image
  icon?: ReactNode; // Small inline icon
  topic: string;
  hashTag_1?: string;
  hashTag_2?: string;
  hashTag_3?: string;
}

const Description_Card = ({ text, image, icon, topic, hashTag_1, hashTag_2, hashTag_3 }: Card) => {
  return (
    // FIX: Removed max-w-sm constraint here so the parent Grid perfectly decides the matching width.
    // 'h-full flex flex-col justify-between' ensures everything stretches up to fill the grid square.
    <div className="w-full h-full flex flex-col justify-between overflow-hidden shadow-lg rounded-lg bg-white">
      
      {/* Upper Half Wrapper */}
      <div className="flex flex-col grow">
        
        {/* FIX: Fixed height image (h-48 object-cover) keeps the banner exactly uniform on all cards */}
        <div className="w-full h-48 overflow-hidden shrink-0">
          <img className="w-full h-full object-cover" src={image} alt={topic} />
        </div>
        
        {/* Card content text body */}
        <div className="px-6 py-5 flex items-start grow">
          
          {/* Icon space */}
          {icon && (
            <div className="w-10 h-10 mr-4 shrink-0 flex items-center justify-center bg-gray-50 rounded-xl p-1 border border-gray-100">
             {icon}
            </div>
          )}
          
          {/* Headline & Paragraph text */}
          <div className="flex flex-col">
            <h3 className="font-bold text-xl mb-2 text-gray-900 leading-tight">
              {topic}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {text}
            </p>
          </div>
          
        </div>
      </div>

      {/* Bottom Half: Hashtag section strictly anchored to the low boundary */}
      <div className="px-6 pt-2 pb-4 mt-auto border-t border-gray-50">
        <div className="flex flex-wrap gap-2">
          {hashTag_1 && (
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600">
              #{hashTag_1}
            </span>
          )}
          {hashTag_2 && (
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600">
              #{hashTag_2}
            </span>
          )}
          {hashTag_3 && (
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600">
              #{hashTag_3}
            </span>
          )}
          {/* FIX: Empty fallback tag keeps the space occupied if a card has no tags, maintaining layout height */}
          {!hashTag_1 && !hashTag_2 && !hashTag_3 && (
            <span className="opacity-0 pointer-events-none select-none inline-block py-1 text-xs">Spacer</span>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Description_Card;
