package org.teamscript.LinkedHU_CENG.config;

public class Constants {

    public static final String HOST = "localhost";
    public static final int PORT = 8080;

    public static final String ADMIN_USERNAME = "admin";
    public static final String ADMIN_PASSWORD = System.getenv("ADMIN_PASSWORD");

    public static final int BYTE_PER_STREAM_READ = 1024;
    public static final Long SECONDS_PER_WEEK = 604800L;
}