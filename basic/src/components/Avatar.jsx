export default function Avatar({ image, isNew }) {
  return (
    <div className="photo-wrap">
      <img className="photo" src={image} alt="Profile photo" />
      {isNew && <span className="tag-new">New</span>}
    </div>
  );
}
