import styled from "@emotion/styled";
import {
  DayPicker,
} from 'react-day-picker';
import { breakPoints } from "../../../commons/styles/media";

export const Input = styled.input`
  width: 22rem;
  height: 4.8rem;
  border-radius: 0.8rem;
  padding: 10px;
  padding-left: 40px;
  font-size: 1.8rem;
  border: 2px solid #DBDBDB;

  background-image: url(/images/calendar.png);
  background-repeat: no-repeat;
  background-size : 2.2rem;
  background-position: 1rem center;

  @media ${breakPoints.mobile} {
    width: 14rem;
    height: 4.0rem;
    padding: 0;
  }
`
export const StartEndDate = styled.div`
display: flex;
`
export const Picker = styled.div`
margin-top: 1rem;
padding: 2rem;
background-color: white;
border-radius: 1rem;
`

export const FromTo = styled.div`
border-bottom: 2px solid #DBDBDB;
width: 15px;
margin: 0 10px 20px 10px;
`
export const StartDay = styled.div`
display: flex;
`
export const ReactDayPick = styled(DayPicker)`
* {
  --rdp-cell-size: 65px;
  --rdp-accent-color: #333333;
  --rdp-background-color: #e7edff;
  /* Switch to dark colors for dark themes */
  --rdp-accent-color-dark: #3003e1;
  --rdp-background-color-dark: #180270;
  /* Outline border for focused elements */
  --rdp-outline: 2px solid var(--rdp-accent-color);
  /* Outline border for focused and selected elements */
  --rdp-outline-selected: 2px solid #DBDBDB;

  @media ${breakPoints.mobile} {
    --rdp-cell-size: 35px;
  }
}

.rdp {
  margin: 1em;
}

/* Hide elements for devices that are not screen readers */
.rdp-vhidden {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background: transparent;
  border: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  position: absolute !important;
  top: 0;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  border: 0 !important;
}

/* Buttons */
.rdp-button_reset {
  appearance: none;
  position: relative;
  margin: 0;
  padding: 0;
  cursor: default;
  color: inherit;
  outline: none;
  background: none;
  font: inherit;
  font-size: 2rem;
  -moz-appearance: none;
  -webkit-appearance: none;

  @media ${breakPoints.mobile} {
    font-size: 1.8rem;
  }
}

.rdp-button {
  border: 2px solid transparent;
}

.rdp-button[aria-disabled='true'] {
  opacity: 0.25;
  pointer-events: none;
}

.rdp-button:not([aria-disabled='true']) {
  cursor: pointer;
}

.rdp-button:focus,
.rdp-button:active {
  color: inherit;
  border: var(--rdp-outline);
  background-color: var(--rdp-background-color);
}

.rdp-button:hover:not([aria-disabled='true']) {
  background-color: var(--rdp-background-color);
}

.rdp-months {
  display: flex;
}

.rdp-month {
  margin: 0 1em;
}

.rdp-month:first-child {
  margin-left: 0;
}

.rdp-month:last-child {
  margin-right: 0;
}

.rdp-table {
  margin: 0;
  max-width: calc(var(--rdp-cell-size) * 7);
  border-collapse: collapse;
}

.rdp-with_weeknumber .rdp-table {
  max-width: calc(var(--rdp-cell-size) * 8);
  border-collapse: collapse;
}

.rdp-caption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  text-align: left;
}

.rdp-multiple_months .rdp-caption {
  position: relative;
  display: block;
  text-align: center;
}

.rdp-caption_dropdowns {
  position: relative;
  display: inline-flex;
}

.rdp-caption_label {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 0 0.25em;
  white-space: nowrap;
  color: currentColor;
  border: 0;
  border: 2px solid transparent;
  font-family: inherit;
  font-size: 200%;
  font-weight: bold;

  @media ${breakPoints.mobile} {
    font-size: 2.5rem;
  }
}

.rdp-nav {
  white-space: nowrap;
}

.rdp-multiple_months .rdp-caption_start .rdp-nav {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.rdp-multiple_months .rdp-caption_end .rdp-nav {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.rdp-nav_button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--rdp-cell-size);
  height: var(--rdp-cell-size);
  padding: 0.25em;
  border-radius: 100%;
}

/* ---------- */
/* Dropdowns  */
/* ---------- */

.rdp-dropdown_year,
.rdp-dropdown_month {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.rdp-dropdown {
  appearance: none;
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: inherit;
  opacity: 0;
  border: none;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.rdp-dropdown[disabled] {
  opacity: unset;
  color: unset;
}

.rdp-dropdown:focus:not([disabled]) + .rdp-caption_label,
.rdp-dropdown:active:not([disabled]) + .rdp-caption_label {
  border: var(--rdp-outline);
  border-radius: 6px;
  background-color: var(--rdp-background-color);
}

.rdp-dropdown_icon {
  margin: 0 0 0 5px;
}

.rdp-head {

  border: 0;
}

.rdp-head_row,
.rdp-row {
  height: 100%;
}

.rdp-head_cell {
  vertical-align: middle;
  text-transform: uppercase;
  font-size: 1.3em;
  font-weight: 700;
  text-align: center;
  height: 100%;
  height: var(--rdp-cell-size);
  padding: 0;
  @media ${breakPoints.mobile} {
    font-size: 2rem;
    padding: 0.6rem;
  }
}

.rdp-tbody {
  border: 0;
}

.rdp-tfoot {
  margin: 0.5em;
}

.rdp-cell {
  width: var(--rdp-cell-size);
  height: 100%;
  height: var(--rdp-cell-size);
  padding: 0;
  text-align: center;
}

.rdp-weeknumber {
  font-size: 0.75em;
}

.rdp-weeknumber,
.rdp-day {
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: var(--rdp-cell-size);
  max-width: var(--rdp-cell-size);
  height: var(--rdp-cell-size);
  margin: 0;
  border: 2px solid transparent;
  border-radius: 100%;
}

.rdp-day_today:not(.rdp-day_outside) {
  font-weight: 700;
}

.rdp-day_selected:not([aria-disabled='true']),
.rdp-day_selected:focus:not([aria-disabled='true']),
.rdp-day_selected:active:not([aria-disabled='true']),
.rdp-day_selected:hover:not([aria-disabled='true']) {
  color: white;
  background-color: var(--rdp-accent-color);
}

.rdp-day_selected:focus:not([aria-disabled='true']) {
  border: var(--rdp-outline-selected);
}

.rdp:not([dir='rtl']) .rdp-day_range_start:not(.rdp-day_range_end) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.rdp:not([dir='rtl']) .rdp-day_range_end:not(.rdp-day_range_start) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.rdp[dir='rtl'] .rdp-day_range_start:not(.rdp-day_range_end) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.rdp[dir='rtl'] .rdp-day_range_end:not(.rdp-day_range_start) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.rdp-day_range_end.rdp-day_range_start {
  border-radius: 100%;
}

.rdp-day_range_middle {
  border-radius: 100;
}

`
