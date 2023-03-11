import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (

        <Slider
            sx={{ // стили для слайдера // пишет студент
                'width': '200px',
                "color": '#01CB22',
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                },
                '& .MuiSlider-thumb': {
                    color: '#fff',
                    height: 18,
                    border: '1px solid #01CB22',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
