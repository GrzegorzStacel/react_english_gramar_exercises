import React from 'react'
import Button from '../../../components/Button/Button'
import AppContext from '../../../components/context';
import ListWrapper from '../../../components/ListWrapper/ListWrapper'
import styles from './TimeView.module.scss';

const TimeView = ({ setClassName }) => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <>
                    <p>This is an Time View</p>
                    <ListWrapper
                        items={context.items}
                        placeOfArrayItems={0}
                    />
                    <Button
                        className={setClassName}    
                        handleOnClick={context.resetFn}
                    >
                        reset
                    </Button>
                </>
            )}
        </AppContext.Consumer>
    )
}

export default TimeView
