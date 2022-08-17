
// keep

// keep !
(function (){
    let stickedItem = document.createElement('div')
    stickedItem.classList.add('sticked')


    let anotherStickedItem = document.createElement('div')
    anotherStickedItem.classList.add('sticked')

    document.querySelector('.sticked-album').appendChild(stickedItem)


    document.querySelector('.sticked-album').appendChild(anotherStickedItem)

    let secondCardStatus = undefined
    let firstCardStatus = undefined

    let thirdCardStatus = undefined

    let bouncedSecondCardStatus = undefined
    let bouncedFirstCardStatus = 'opened'
    let bouncedThirdCardStatus = undefined

    /* CallingInSequenceIncludingWaitStrategy */
    /* 2 4 8 */

    /* CallingInSequenceViaSetTimeoutStrategy */
    /* 8 4 2 */

// PassEventIntoSlowExecutableQueueStrategy

    let firstCardIndex = 4
    let secondCardIndex = 2
    let thirdCardIndex = 1


    document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').onclick = function () {
        // if(secondCardStatus !== 'opened') {
        //     // keep
        // } else {
        //     return
        // }
        if(bouncedSecondCardStatus !== 'opened') {
            // keep
        } else {
            return
        }

        if(bouncedThirdCardStatus === 'opened' && bouncedFirstCardStatus !== 'opened') {
            document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.animation = 'toggleCard2ndCardFromBehind3rdCardAndAbove1stCard 1s'
        }
        if(bouncedThirdCardStatus === 'opened' && bouncedFirstCardStatus === 'opened') {
            document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.animation = 'toggleCard2ndCardFromAbove3rdCardAndBehind1stCard 1s'
        }
        if(bouncedThirdCardStatus !== 'opened' && bouncedFirstCardStatus === 'opened') {
            document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.animation = 'toggleCard2ndCardFromAbove3rdCardAndBehind1stCard 1s'
        }


        if(bouncedThirdCardStatus === 'opened' && bouncedFirstCardStatus !== 'opened') {
            setTimeout(() => {
                secondCardIndex = thirdCardIndex * 2

                document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.zIndex = /* 16 */ secondCardIndex
            }, 500)
        }
        if(bouncedThirdCardStatus === 'opened' && bouncedFirstCardStatus === 'opened') {
            setTimeout(() => {
                secondCardIndex = firstCardIndex * 2

                document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.zIndex = /* 4 */ secondCardIndex
            }, 500)
        }
        if(bouncedThirdCardStatus !== 'opened' && bouncedFirstCardStatus === 'opened') {
            setTimeout(() => {
                secondCardIndex = firstCardIndex * 2

                document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.zIndex = /* 4 */ secondCardIndex
            }, 500)
        }

        bouncedSecondCardStatus = 'opened'
        bouncedFirstCardStatus = undefined
        bouncedThirdCardStatus = undefined


        setTimeout(() => {
            // document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.zIndex = 2
            if(bouncedThirdCardStatus === 'opened' && bouncedFirstCardStatus !== 'opened') {
                document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.zIndex = /* 16 */ secondCardIndex
            }
            if(bouncedThirdCardStatus === 'opened' && bouncedFirstCardStatus === 'opened') {
                document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.zIndex = /* 4 */ secondCardIndex
            }
            if(bouncedThirdCardStatus === 'closed' && bouncedFirstCardStatus === 'opened') {
                document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.zIndex = /* 4 */ secondCardIndex
            }

            secondCardStatus = 'opened'
            firstCardStatus = undefined

            thirdCardStatus = undefined

            document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.animation = ''
        }, 1000)

    }

    document.querySelector('.sticked-album').querySelector('.sticked:nth-child(1)').onclick = function () {
        // dontAllowChangeStrategy
        // allowChangeEveryTimeStrategy
        // if(secondCardStatus === 'opened') {
        //     // keep
        // } else {
        //     return
        // }


        // carringAboutItselfStrategy (eg. useIncapsulation)
        // if(firstCardStatus !== 'opened') {
        //     // keep
        // } else {
        //     return
        // }
        if(bouncedFirstCardStatus !== 'opened') {
            // keep
        } else {
            return
        }

        bouncedThirdCardStatus = undefined
        bouncedFirstCardStatus = 'opened'

        document.querySelector('.sticked-album').querySelector('.sticked:nth-child(1)').style.animation = 'toggleCard2ndCard 1s'

        setTimeout(() => {
            firstCardIndex = secondCardIndex * 2

            document.querySelector('.sticked-album').querySelector('.sticked:nth-child(1)').style.zIndex = firstCardIndex
        }, 500)

        setTimeout(() => {

            document.querySelector('.sticked-album').querySelector('.sticked:nth-child(1)').style.zIndex = firstCardIndex
            document.querySelector('.sticked-album').querySelector('.sticked:nth-child(1)').style.animation = ''

            firstCardStatus = 'opened'
            secondCardStatus = undefined
        }, 1000)
    }

    let stickedItemAtEndOfSequence = document.createElement('div')
    stickedItemAtEndOfSequence.classList.add('sticked')

    document.querySelector('.sticked-album').appendChild(stickedItemAtEndOfSequence)

    document.querySelector('.sticked-album').querySelector('.sticked:nth-child(3)').onclick = function () {
        // if(thirdCardStatus !== 'opened') {
        //     // keep
        // } else {
        //     return
        // }
        if(bouncedThirdCardStatus !== 'opened') {
            // keep
        } else {
            return
        }
        document.querySelector('.sticked-album').querySelector('.sticked:nth-child(3)').style.animation = 'toggleCard 1s'

        setTimeout(() => {
            thirdCardIndex = secondCardIndex * 2

            document.querySelector('.sticked-album').querySelector('.sticked:nth-child(3)').style.zIndex = thirdCardIndex
        }, 500)

        bouncedThirdCardStatus = 'opened'
        bouncedSecondCardStatus = undefined

        setTimeout(() => {
            document.querySelector('.sticked-album').querySelector('.sticked:nth-child(3)').style.zIndex = thirdCardIndex
            document.querySelector('.sticked-album').querySelector('.sticked:nth-child(3)').style.animation = ''

            thirdCardStatus = 'opened'
            secondCardStatus = undefined
        }, 1000)
    }

    let stickedSequence = document.createElement('div')
    stickedSequence.classList.add('sticked-sequence')
    document.querySelector('.sticked-album').appendChild(stickedSequence)

})()