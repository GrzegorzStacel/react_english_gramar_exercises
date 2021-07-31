import React from 'react'
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
                        setStateAndUpdate={context.setStateAndUpdate}
                    />
                </>
            )}
        </AppContext.Consumer>
    )
}

export default TimeView
