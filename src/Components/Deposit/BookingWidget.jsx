import React, { useEffect, useRef } from 'react';
import {SimplybookWidget} from 'simplybook-js-api'

function BookingWidget() {
    const widgetContainerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//widget.simplybook.me/v2/widget/widget.js";
        script.onload = () => {
            new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/nehavencleaners.simplybook.me","theme":"creative","theme_settings":{"timeline_show_end_time":"0","timeline_modern_display":"as_slots","timeline_hide_unavailable":"1","index_page_content_grid":"[{\"template\":\"col_25_50_25\",\"items\":[\"timetable\",\"about-us\",\"contacts\"]}]","hide_past_days":"0","sb_base_color":"#655d51","display_item_mode":"block","booking_nav_bg_color":"#655d51","body_bg_color":"#ffffff","sb_review_image":"","dark_font_color":"#474747","light_font_color":"#ffffff","btn_color_1":"#b0c3ac","hide_img_mode":"0","show_sidebar":"1","sb_busy":"#c7b3b3","sb_available":"#d6ebff"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"clear_session":0,"allow_switch_to_ada":0,"predefined":[]},"container_id":"sbw_b57u8w"});
        };
        document.head.appendChild(script);

        
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
       <div id="sbw_b57u8w" ref={widgetContainerRef}></div>
    );
}

export default BookingWidget;
