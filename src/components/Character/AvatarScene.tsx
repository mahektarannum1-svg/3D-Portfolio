import "./AvatarScene.css";

const AvatarScene = () => {
  return (
    <div className="character-container">
      <div className="character-model avatar-2d-wrapper">
        <div className="avatar-glow-ring" />
        <div className="avatar-glow-ring avatar-glow-ring--2" />

        {/* Sparkle particles */}
        <span className="avatar-particle avatar-particle--1" />
        <span className="avatar-particle avatar-particle--2" />
        <span className="avatar-particle avatar-particle--3" />
        <span className="avatar-particle avatar-particle--4" />
        <span className="avatar-particle avatar-particle--5" />
        <span className="avatar-particle avatar-particle--6" />
        <span className="avatar-particle avatar-particle--7" />
        <span className="avatar-particle avatar-particle--8" />

        <img
          src="/images/avatar.png"
          alt="Mahek Tarannum - Software Engineer"
          className="avatar-2d-img"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default AvatarScene;
