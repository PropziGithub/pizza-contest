import Select from 'react-select'
import makeAnimated from 'react-select/animated';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const animatedComponents = makeAnimated();

const formClasses =
  'block w-full appearance-none rounded-[3px] border border-grey-light bg-[#FFFFFF] placeholder:text-[#000000] py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-main_primary focus:outline-none focus:ring-main_primary sm:text-sm'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-[#FFFFFF]"
    >
      {children}
    </label>
  )
}


export function TextField({ id, label, type = 'text', className, ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}


export function SelectField({ id, label,onChange ,value,className, ...props }) {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '3px',
      border: '1px solid #C2C2C2',
      backgroundColor: '#FFFFFF',
      placeholder: '#000000',
      padding: 'calc(var(--spacing-2) - 1px) calc(var(--spacing-3) - 1px)',
      color: '#000000',
      fontSize: '14px',
      fontWeight: 'normal',
      boxShadow: 'none',
      '&:hover': {
        border: '1px solid #C2C2C2',
      },
      '&:focus': {
        outline: 'none',
        border: '2px solid #007AFF',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#007AFF' : '#FFFFFF',
      color: state.isSelected ? '#FFFFFF' : '#000000',
      '&:hover': {
        backgroundColor: state.isSelected ? '#007AFF' : '#F5F5F5',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#A8A8A8',
    }),
  };
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <Select
        id={id}
        {...props}
        styles={customStyles}
        className={className}
        value={value}
        onChange={onChange}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti={true}
      />
    </div>
  )
}