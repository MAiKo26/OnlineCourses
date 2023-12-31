import { addDoc, getDocs, collection, query, where } from "firebase/firestore";
import { Post } from "./main";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import { useEffect, useState } from "react";
interface Props {
  post: Post;
}

interface Like {
  userId: string;
}

export const CardPost = (props: Props) => {
  const { post } = props;

  const likesRef = collection(db, "likes");
  const likesDoc = query(likesRef, where("postId", "==", post.id));
  const [user] = useAuthState(auth);
  const [likeAmount, setLikeAmount] = useState<number | null>(null);
  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikeAmount(data.docs.length);
  };
  const addLike = async () => {
    await addDoc(likesRef, { userId: user?.uid, postId: post.id });
    getLikes();
  };

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div>
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="body">
        <p> {post.description}</p>
      </div>
      <div className="footer">
        <p>@{post.username}</p>
        {user && <button onClick={addLike}> &#128077; </button>}

        {likeAmount && (
          <>
            <p>Likes : {likeAmount} </p>
          </>
        )}
      </div>
    </div>
  );
};
