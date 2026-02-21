import styles from './SearchFilter.module.css';

interface Props {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function SearchFilter({
  placeholder = 'Search...',
  value,
  onChange,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
