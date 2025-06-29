import { useState } from 'react';

const Post = ({ post, onPostDeleted }) => {
  const [likes, setLikes] = useState(post.likeCount || 0);
  const [comments, setComments] = useState(32); // placeholder for now
  const [isLiked, setIsLiked] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => prev + (isLiked ? -1 : 1));
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onPostDeleted?.(post._id); // notify parent
    }, 500);
  };

  const getInitials = (name = "User") =>
    name.split(' ').map(part => part[0]).join('');

  const formatTime = (dateString) => {
    const now = new Date();
    const created = new Date(dateString);
    const diff = Math.floor((now - created) / 1000);
    if (diff < 60) return `${diff}s`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
    return `${Math.floor(diff / 86400)}d`;
  };

  return (
    <div className={`bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform ${
      isDeleting ? 'scale-95 opacity-0 translate-y-4' : 'hover:scale-[1.02] hover:shadow-purple-500/20'
    } border border-gray-800 hover:border-purple-500/30`}>
      
      {/* Image */}
      <div className="relative group overflow-hidden">
        <img 
          src={`http://localhost:8080/${post.selectedFile}`} 
          alt="Post" 
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        <div className="absolute top-4 left-4 flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {getInitials("Anonymous")}
          </div>
          <div className="text-white">
            <p className="font-semibold text-lg">Anonymous</p>
            <p className="text-gray-300 text-sm">{formatTime(post.createdAt)} ago</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
              {tag.trim()}
            </span>
          ))}
        </div>

        <p className="text-gray-300 leading-relaxed text-base">
          {post.message}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center space-x-3">
            <button onClick={handleLike} className={`px-4 py-2 rounded-xl ${isLiked ? 'bg-pink-600 text-white' : 'bg-gray-800 text-gray-300'}`}>
              ❤️ {likes}
            </button>
            <button onClick={() => alert("Comments feature coming soon")} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-xl">
              💬 {comments}
            </button>
          </div>
          <button onClick={handleDelete} className="px-4 py-2 bg-red-600/10 text-red-400 rounded-xl hover:bg-red-600/20">
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
