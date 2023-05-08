import React from "react";
import { Svg, Path } from "react-native-svg";

type Props = {size: number | string,
              color: string }
export const Search = ({size, color}: Props) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 19 19" fill={color}>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.8851 12.9457C9.23482 15.0684 5.35538 14.9013 2.8986 12.4445C0.26256 9.8085 0.26256 5.53464 2.8986 2.8986C5.53464 0.26256 9.8085 0.26256 12.4445 2.8986C14.9013 5.35538 15.0684 9.23481 12.9457 11.8851L18.1014 17.0407C18.3943 17.3336 18.3943 17.8085 18.1014 18.1014C17.8085 18.3943 17.3336 18.3943 17.0407 18.1014L11.8851 12.9457ZM3.95926 11.3839C1.90901 9.33363 1.90901 6.00951 3.95926 3.95926C6.00951 1.90901 9.33363 1.90901 11.3839 3.95926C13.4326 6.00801 13.4341 9.32875 11.3884 11.3794C11.3869 11.3809 11.3854 11.3823 11.3839 11.3839C11.3824 11.3854 11.3809 11.3869 11.3794 11.3884C9.32876 13.4341 6.00801 13.4326 3.95926 11.3839Z" fill={null}/>
        </Svg>
    )
}

const SearchIcon = React.memo(Search)
export default SearchIcon;