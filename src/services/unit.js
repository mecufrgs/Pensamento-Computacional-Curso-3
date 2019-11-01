import React from 'react'
import Unit from '../constants/unit-id'
import UnitName from '../constants/unit-name'
import AvamecError from '../constants/avamec-error'
import Introducao from '../scenes/introducao'
import UnitNotFound from '../scenes/unit-not-found'
import Micromundo_I from '../scenes/micromundo-i'
import Micromundo_II from '../scenes/micromundo-ii'
import Micromundo_III from '../scenes/micromundo-iii'
import Micromundo_IV from '../scenes/micromundo-iv'
import ConsideracoesFinais from '../scenes/consideracoes-finais'
class UnitService {
    getUnit = (unit, slide) => {
        switch (unit) {
            case Unit.INTRODUCAO:
                return (<Introducao slide={slide} />)
            case Unit.MICROMUNDO_I:
                return (<Micromundo_I slide={slide} />)
            case Unit.MICROMUNDO_II:
                return (<Micromundo_II slide={slide} />)
            case Unit.MICROMUNDO_III:
                return (<Micromundo_III slide={slide} />)
            case Unit.MICROMUNDO_IV:
                return (<Micromundo_IV slide={slide} />)
            case Unit.CONSIDERACOES_FINAIS:
                return (<ConsideracoesFinais slide={slide} />)

            default:
                return (<UnitNotFound />)
        }
    }

    getUnitName = (unit) => {
        switch (unit) {
            case Unit.NOT_FOUND:
                return UnitName.NOT_FOUND
            case Unit.INTRODUCAO:
                return UnitName.INTRODUCAO
            case Unit.MICROMUNDO_I:
                return UnitName.MICROMUNDO_I
            case Unit.MICROMUNDO_II:
                return UnitName.MICROMUNDO_II
            case Unit.MICROMUNDO_III:
                return UnitName.MICROMUNDO_III
            case Unit.MICROMUNDO_IV:
                return UnitName.MICROMUNDO_IV
            case Unit.CONSIDERACOES_FINAIS:
                return UnitName.CONSIDERACOES_FINAIS

            default:
                throw Error(AvamecError.INTERNAL_ERROR)
        }  
    }

    getCourseName = () => {
        return UnitName.COURSE_NAME
    }
}

export default (new UnitService())

