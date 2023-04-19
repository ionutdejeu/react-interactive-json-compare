import dynamic from "next/dynamic";
import React from "react";

interface NoSSRProps {
    children: React.ReactNode;
}
const NonSSRWrapper = (props:NoSSRProps) => (
    <React.Fragment>{props.children}</React.Fragment>
)
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
    ssr: false
})