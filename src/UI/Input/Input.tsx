/* eslint-disable require-jsdoc */
import React, {useEffect, ChangeEvent} from 'react';
import './Input.css';

interface InputProps {
  id?: string
  value?: any
  /**
   * Method that is called when blur occurs.
   */
  blurHandler?: () => void
  /**
   * Method that is called when focus occurs.
   */
  focusHandler?: (arg0: any) => void
  /**
   * The icon to be used with this input field.
   */
  icon?: string
  /**
   * The name of this component to be used with forms.
   */
  name?: string
  /**
   * The placeholder for the input field.
   */
  placeholder?: any
  /**
   * The type of this input field.
   */
  type?: 'text' | 'password' | 'number' | 'time' | 'date'
  showError?: any
  errorText?: string

  onChangeValue?: (arg0: ChangeEvent<HTMLInputElement>) => void
  onKeyDownEvent?: (arg0: React.KeyboardEvent) => void
  ref?: React.MutableRefObject<undefined>
  className?: string
  disableAutoComplete?: boolean
}

const Input = (props: InputProps) => {
  // useEffect(() => {
  //   if (props.type === 'date') {
  //     // @ts-ignore
  //     flatpickr.localize(flatpickr.l10ns.fi);
  //     // @ts-ignore
  //     flatpickr.l10ns.default.firstDayOfWeek = 1;
  //     // @ts-ignore
  //     flatpickr(input, {
  //       weekNumbers: true,
  //       dateFormat: 'd.m.Y',
  //     });
  //   }
  // }, []);


  const handleBlur = (event: React.FocusEvent) => {
    const value = props.value;

    if (value === '') {
      // setErrorText('');
      // e.persist();
      // if (props.onChangeValue) {
      //   props.onChangeValue();
      // }
    }

    // if (props.type === 'hrTime') {
    //   if (value.length < 3) {
    //     if (parseInt(value) < 0 || parseInt(value) > 23) {
    //     } else {
    //       input.value = value + ':00';
    //     }
    //   }
    // }


    // input.blur();

    if (props.blurHandler) {
      props.blurHandler();
    }
  };

  /**
   * Resets error text and fires passed onChangeValue(event) event.
   * event.persist() is explained here:
   * https://reactjs.org/docs/events.html#event-pooling
   * @param {ChangeEvent<HTMLInputElement>} event
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onChangeValue) {
      props.onChangeValue(event);
    }
  };

  return (
    <div
      className={'Input' + (props.icon ? ' icon' : '')}
    >
      <input
        id={props.id}
        type={props.type || 'text'}
        className={(props.showError ? 'border-red-600' : '') +
          (props.className ? (' ' + props.className) : '')}
        placeholder={props.placeholder}
        onFocus={(event) => props.focusHandler && props.focusHandler(event)}
        onBlur={(event) => handleBlur(event)}
        onChange={(event) => handleChange(event)}
        onKeyDown={event => {
          if (props.onKeyDownEvent) {
            props.onKeyDownEvent(event);
          }
        }}
        autoComplete={props.disableAutoComplete ? 'off' : ''}
        value={props.value}
      />
      {props.icon && <i className="material-icons">{props.icon}</i>}
      { (props.showError &&
        props.errorText) &&
        <p className="text-red-600 text-sm p-1">{props.errorText}</p>}
    </div>
  );
};


export default Input;
