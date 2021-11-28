package com.example.sklad;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class myDate {
    public static String now(){
        Date date = new Date();
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");//String date = cal.get
        return df.format(date);
    }
}
