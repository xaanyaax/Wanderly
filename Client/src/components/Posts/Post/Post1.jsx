// import { useState } from 'react';

// const Post1 = ({ 
//   imageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
//   author = "Sarah Johnson",
//   timePosted = "2h",
//   hashtags = ["#Maldives", "#Paradise", "#TropicalVibes", "#Wanderlust", "#BeachLife"],
//   description = "Just discovered this hidden gem in the Maldives! The crystal clear waters and pristine beaches make this the perfect escape from reality. Can't wait to come back here someday! ✈️🏝️",
//   initialLikes = 247
// }) => {
//   const [likes, setLikes] = useState(initialLikes);
//   const [isLiked, setIsLiked] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);

//   const handleLike = () => {
//     if (isLiked) {
//       setLikes(likes - 1);
//       setIsLiked(false);
//     } else {
//       setLikes(likes + 1);
//       setIsLiked(true);
//     }
//   };

//   const handleDelete = () => {
//     setIsDeleting(true);
//     // Simulate delete animation
//     setTimeout(() => {
//       console.log('Post deleted');
//       // In a real app, you'd call an API or update parent state
//     }, 500);
//   };

//   return (
//     <div className={`bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform ${
//       isDeleting ? 'scale-95 opacity-0 translate-y-4' : 'hover:scale-[1.02] hover:shadow-purple-500/20'
//     } border border-gray-800 hover:border-purple-500/30`}>
//       {/* Image Container with Overlay */}
//       <div className="relative group overflow-hidden">
//         <img 
//           src={imageUrl} 
//           alt="Tourism destination" 
//           className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
//         />
        
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 transition-opacity duration-300 group-hover:opacity-80"></div>
        
//         {/* Author Info Overlay */}
//         <div className="absolute top-4 left-4 flex items-center space-x-3 transform transition-all duration-300 group-hover:translate-y-1">
//           <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
//             {author.split(' ').map(name => name[0]).join('')}
//           </div>
//           <div className="text-white">
//             <p className="font-semibold text-lg drop-shadow-lg">{author}</p>
//             <p className="text-gray-300 text-sm drop-shadow-md">{timePosted} ago</p>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-6 space-y-4">
//         {/* Hashtags */}
//         <div className="flex flex-wrap gap-2">
//           {hashtags.map((tag, index) => (
//             <span 
//               key={index}
//               className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/50 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 cursor-pointer transform hover:scale-105"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Description */}
//         <p className="text-gray-300 leading-relaxed text-base">
//           {description}
//         </p>

//         {/* Action Buttons */}
//         <div className="flex items-center justify-between pt-4 border-t border-gray-800">
//           <button
//             onClick={handleLike}
//             className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
//               isLiked 
//                 ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/25' 
//                 : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-gray-600'
//             }`}
//           >
//             <svg 
//               className={`w-5 h-5 transition-transform duration-300 ${isLiked ? 'scale-110' : ''}`}
//               fill={isLiked ? 'currentColor' : 'none'} 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
//               />
//             </svg>
//             <span className="font-semibold">{likes.toLocaleString()}</span>
//           </button>

//           <button
//             onClick={handleDelete}
//             className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-gray-400 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:bg-red-600/20 hover:text-red-400 border border-gray-700 hover:border-red-500/50 group"
//           >
//             <svg 
//               className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
//               />
//             </svg>
//             <span>Delete</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post1;

import { useState } from 'react';

const Post = ({ 
  imageUrl,
  author,
  timePosted,
  hashtags,
  description,
  initialLikes,
  initialComments = 32
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const [isLiked, setIsLiked] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleComment = () => {
    // In a real app, this would open a comment modal or navigate to comments
    console.log('Opening comments...');
  };

  const handleDelete = () => {
    setIsDeleting(true);
    // Simulate delete animation
    setTimeout(() => {
      console.log('Post deleted');
      // In a real app, you'd call an API or update parent state
    }, 500);
  };

  return (
    <div className={`bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform ${
      isDeleting ? 'scale-95 opacity-0 translate-y-4' : 'hover:scale-[1.02] hover:shadow-purple-500/20'
    } border border-gray-800 hover:border-purple-500/30`}>
      {/* Image Container with Overlay */}
      <div className="relative group overflow-hidden">
        <img 
          src={imageUrl} 
          alt="Tourism destination" 
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 transition-opacity duration-300 group-hover:opacity-80"></div>
        
        {/* Author Info Overlay */}
        <div className="absolute top-4 left-4 flex items-center space-x-3 transform transition-all duration-300 group-hover:translate-y-1">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {author.split(' ').map(name => name[0]).join('')}
          </div>
          <div className="text-white">
            <p className="font-semibold text-lg drop-shadow-lg">{author}</p>
            <p className="text-gray-300 text-sm drop-shadow-md">{timePosted} ago</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Hashtags */}
        <div className="flex flex-wrap gap-2">
          {hashtags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/50 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-base">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center space-x-3">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                isLiked 
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/25' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-gray-600'
              }`}
            >
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isLiked ? 'scale-110' : ''}`}
                fill={isLiked ? 'currentColor' : 'none'} 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
              <span className="font-semibold">{likes.toLocaleString()}</span>
            </button>

            <button
              onClick={handleComment}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:bg-blue-600/20 hover:text-blue-400 border border-gray-700 hover:border-blue-500/50 group"
            >
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                />
              </svg>
              <span className="font-semibold">{comments.toLocaleString()}</span>
            </button>
          </div>

          <button
            onClick={handleDelete}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-gray-400 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:bg-red-600/20 hover:text-red-400 border border-gray-700 hover:border-red-500/50 group"
          >
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
              />
            </svg>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;