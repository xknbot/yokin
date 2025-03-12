import React from 'react';
import classNames from 'classnames';
import styles from '@/styles/Button.module.css'; // Giả định có file CSS Module cho kiểu dáng
import "@/styles/globals.css";



// Định nghĩa interface cho props của Button
interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'third' | 'fourth' | 'fifth';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

// Component Button với TypeScript
const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  className,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  const classes = classNames(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    {
      [styles['button--disabled']]: disabled,
      [styles['button--loading']]: loading,
    },
    className,
    {
      [styles['no-hover']]: disabled, // Thêm class để loại bỏ hover khi disabled
    }
  );

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={handleClick}
    >
      {loading ? <span className={styles.spinner} /> : children}
    </button>
  );
};



export default Button;
