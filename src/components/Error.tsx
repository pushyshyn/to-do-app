import { useEffect, FC } from 'react';
import cn from 'classnames';

type Props = {
  onClose: () => void;
  errorMessage: string;
};
export const Error: FC<Props> = ({ onClose, errorMessage }) => {
  useEffect(() => {
    const timeout = setTimeout(onClose, 3000);

    return () => clearTimeout(timeout);
  }, [errorMessage, onClose]);

  return (
    <div
      data-cy="ErrorNotification"
      className={cn('notification is-danger is-light has-text-weight-normal', {
        hidden: !errorMessage,
      })}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={onClose}
      />
      {errorMessage}
    </div>
  );
};
