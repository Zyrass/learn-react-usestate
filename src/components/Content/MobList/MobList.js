import styles from "./MobList.module.scss";

function MobList({ params }) {
  return (
    <ul className="d-flex flex-row justify-between mx-25">
      <li className={`${styles.forme}`}>
        <h3>{params.name}</h3>
        <ul className="flex-fill">
          <li className="mb-5">
            <span>💓 Vitalité :</span> <span>{params.vitalite}</span>
          </li>
          <li className="mb-5">
            <span>💪 Force :</span> <span>{params.force}</span>
          </li>
          <li className="mb-5">
            <span>🛡 Rés :</span>
            <span>{`${params.resistance} %`}</span>
          </li>
          <li>
            <span>LVL</span>{" "}
            <span>
              {params.lvlMin}-{params.lvlMax}
            </span>
          </li>
        </ul>
        <div>
          <span>💰</span> <span>{params.or}</span>
          <span>EXP</span> <span>{params.exp}</span>
        </div>
      </li>
    </ul>
  );
}

export default MobList;
