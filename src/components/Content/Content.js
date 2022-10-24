import { useState } from "react";

import styles from "./Content.module.scss";
import MobList from "./MobList/MobList";

function Content() {
  const [mob, setMob] = useState({
    name: "",
    lvlMin: 1,
    lvlMax: 2,
    force: 1,
    vitalite: 50,
    resistance: 0,
    or: 1,
    exp: 1,
  });
  const [mobList, setMobList] = useState([]);

  function handleInput(e) {
    const newMob = {
      ...mob,
      [e.target.name]:
        e.target.name === "name" ? e.target.value : +e.target.value,
    };
    console.table(newMob);
    setMob(newMob);
  }

  function handleClickAddNewMob(e) {
    e.preventDefault();
    const newMobList = [...mobList, { ...mob }];
    setMobList(newMobList);
  }

  return (
    <main className="d-flex flex-column align-center pt-50">
      <form className={`card w100 p-20 d-flex flex-column ${styles.formStyle}`}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Nom du mob:</label>
          <input
            onInput={handleInput}
            className={styles.inputText}
            type="text"
            placeholder="Mob name..."
            name="name"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            level minimum: <mark>{mob.lvlMin}</mark>
          </label>
          <input
            onInput={handleInput}
            className={styles.inputRange}
            type="range"
            min="1"
            max="100"
            name="lvlMin"
            value={mob.lvlMin}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            level maximum: <mark>{mob.lvlMax}</mark>
          </label>
          <input
            onInput={handleInput}
            className={styles.inputRange}
            type="range"
            min="1"
            max="100"
            name="lvlMax"
            value={mob.lvlMax}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            force: <mark>{mob.force}</mark>
          </label>
          <input
            onInput={handleInput}
            className={styles.inputRange}
            type="range"
            min="1"
            max="100"
            name="force"
            value={mob.force}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            vitalité: <mark>{mob.vitalite}</mark>
          </label>
          <input
            onInput={handleInput}
            className={styles.inputRange}
            type="range"
            min="50"
            max="1000"
            name="vitalite"
            value={mob.vitalite}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            résistance: <mark>{mob.resistance} %</mark>
          </label>
          <input
            onInput={handleInput}
            className={styles.inputRange}
            type="range"
            min="-50"
            max="50"
            name="resistance"
            value={mob.resistance}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            OR: <mark>{mob.or}</mark>
          </label>
          <input
            onInput={handleInput}
            className={styles.inputRange}
            type="range"
            min="1"
            max="10"
            name="or"
            value={mob.or}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            EXPERIENCES: <mark>{mob.exp}</mark>
          </label>
          <input
            onInput={handleInput}
            className={styles.inputRange}
            type="range"
            min="1"
            max="25"
            name="exp"
            value={mob.exp}
          />
        </div>

        <button
          onClick={handleClickAddNewMob}
          className="btn btn-info mt-20 px-5"
          disabled={mob.name === "" ? true : false}
        >
          Ajouter
        </button>
      </form>

      <section className={styles.section}>
        {mobList.map((currentMob, index) => (
          <MobList key={currentMob.name + "_" + index} params={currentMob} />
        ))}
      </section>
    </main>
  );
}

export default Content;
