import React, { PropTypes } from 'react';
import bindAll from 'lodash';
import classnames from 'classnames';

export default class Calendar extends React.Component {

    static propTypes = {
        moment: PropTypes.any.isRequired,
        className: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        // bindAll(this, ['handleFocus', 'handleSave', 'handleChange']);

        this.state = {
            isOpen: false,
            tab: 0,
            m: this.props.moment
        };
    }

    render() {
        //23:43


        const { m } = this.state;
        const wrapperClasses = classnames(this.props.className, 'tab-calendar')
        const  weeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

        return (
            <div className={ wrapperClasses }>
                <div className='toolbar'>
                    <button className='prev-month'> - </button>
                    <span className='current-date'>{ m.format('MMMM YYYY') }</span>
                    <button className='next-month'> - </button>
                </div>
            </div>
        );
    }
}
