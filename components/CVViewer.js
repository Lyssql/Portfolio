import styles from './CVViewer.module.css';

export default function CVViewer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.objectWrapper}>
        <object data="/cv.pdf" type="application/pdf">
          <iframe src="/cv.pdf" title="CV"></iframe>
        </object>
      </div>
      <div className={styles.buttonRow}>
        <a href="/cv.pdf" download className={styles.button}>
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
}
