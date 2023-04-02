
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

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


export function SelectField({ id, label, className, ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={classNames(formClasses, 'pr-8')} />
    </div>
  )
}