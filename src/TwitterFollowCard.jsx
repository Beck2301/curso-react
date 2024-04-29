import { useState } from "react";

export function TitterFollowCard({ children, userName = "unknow", initialIsFollowing }) {
  const [isFolowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFolowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFolowing
    ? "tw-followCard-button isFollowing"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFolowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/${userName}`}
          alt="Avatar de Beck"
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className=".tw-followCard-infoUsarname">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
