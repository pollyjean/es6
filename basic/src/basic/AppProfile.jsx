import "./App.css";
import Profile from "./components/Profile.jsx";

export default function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("click");
  };
  return (
    <>
      <div>
        <button onClick={handleClick}>Button</button>
      </div>
      <Profile image="https://images.unsplash.com/photo-1678033950488-6628390612d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" name="daniel lee" job="프론트엔드 개발자" />
      <Profile image="https://images.unsplash.com/photo-1673261577380-f8b1bf214f6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" name="tanaka" job="백엔드 개발자" isNew={true} />
      <Profile image="https://images.unsplash.com/photo-1677709678802-529eb9305e9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" name="dr brown" job="웹 디자이너" />
    </>
  );
}
