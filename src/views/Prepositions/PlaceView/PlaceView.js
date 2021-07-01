import React from 'react'
import AppContext from '../../../components/context';
import ListWrapper from '../../../components/ListWrapper/ListWrapper'
import Button from '../../../components/Button/Button'

const PlaceaView = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <>
                    <p>This is an Place View</p>
                    <ListWrapper
                        items={context.itemsPlace}
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

export default PlaceaView
