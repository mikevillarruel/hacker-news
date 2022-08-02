import logoAngular from '../assets/images/angular.png';
import logoReact from '../assets/images/react.png';
import logoVue from '../assets/images/vue.png';
import './OptionPicker.css';

interface Props {
    onChange: (value: string) => void;
}

interface Option {
    value: string,
    logo: string,
    label: string,
}

export const OptionPicker = ({ onChange }: Props) => {

    const options: Option[] = [
        {
            value: 'angular',
            logo: logoAngular,
            label: 'Angular'
        },
        {
            value: 'reactjs',
            logo: logoReact,
            label: 'Reactjs'
        }
        , {
            value: 'vuejs',
            logo: logoVue,
            label: 'Vuejs'
        }
    ]

    const getSelectedFramework = () => {
        var selecteFramework = localStorage.getItem('selectedFramework') || 'default';
        if (selecteFramework != 'default') {
            onChange(selecteFramework);
        }
        return selecteFramework;
    }

    return (
        <select
            className='select-framework'
            defaultValue={getSelectedFramework()}
            onChange={({ target: { value } }) => {
                localStorage.setItem('selectedFramework', value);
                onChange(value)
            }}
        >
            <option value='default' selected hidden>
                Select your news
            </option>
            {options.map((option, index) => (
                <option value={option.value} key={index}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}
