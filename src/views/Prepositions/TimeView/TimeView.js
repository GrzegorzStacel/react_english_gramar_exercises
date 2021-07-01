import React from 'react'
import Button from '../../../components/Button/Button'
import AppContext from '../../../components/context';
import ListWrapper from '../../../components/ListWrapper/ListWrapper'

const TimeView = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <>
                    <p>This is an Time View</p>
                    <ListWrapper
                        items={context.itemsTime}
                        placeOfArrayItems={0}
                    />
                    <Button
                        setClassName={context.stylesResetButton}    
                        handleOnClick={context.resetFn}
                    >
                        RESET
                    </Button>
                </>
            )}
        </AppContext.Consumer>
    )
}

export default TimeView
