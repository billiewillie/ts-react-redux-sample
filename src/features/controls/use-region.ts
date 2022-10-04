import { CountryOption } from './CustomSelect';
import { useAppDispatch } from 'store';
import { useSelector } from 'react-redux'
import { selectRegion } from 'features/controls/controls-selectors';
import { setRegion } from 'features/controls/controls-slice';
import { Region } from 'types';
import { SingleValue } from 'react-select';

type onSelect = (reg: SingleValue<CountryOption>) => void;

export const useRegion = (): [Region | '', onSelect] => {
  const dispatch = useAppDispatch()
  const region = useSelector(selectRegion);

  const handleSelect: onSelect = (reg) => {
    if (reg) dispatch(setRegion(reg.value))
    else dispatch(setRegion(''));
  }

  return [region, handleSelect];
}
