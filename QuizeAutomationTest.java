package com.frugaltesting.quiz;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintStream;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class QuizAutomationTest {
    
    private static String screenshotPath = "C:/quiz-automation-output/screenshots/";
    private static String reportPath = "C:/quiz-automation-output/reports/";
    private static FileWriter logWriter;
    private static int screenshotCounter = 1;
    
    static {
        // Suppress all Selenium warnings
        Logger.getLogger("org.openqa.selenium").setLevel(Level.SEVERE);
        System.setProperty("webdriver.chrome.silentOutput", "true");
    }

    public static void main(String[] args) throws InterruptedException {

        // Suppress Chrome driver warnings
        System.setProperty("webdriver.chrome.verbosity", "0");
        System.setErr(new PrintStream(new OutputStream() {
            public void write(int b) {}
        }));

        // Create output directories
        new File(screenshotPath).mkdirs();
        new File(reportPath).mkdirs();
        
        try {
            logWriter = new FileWriter(reportPath + "test-log.txt");
            logMessage("========== QUIZ AUTOMATION TEST STARTED ==========");
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.setProperty("webdriver.chrome.driver", "C:/selenium/chromedriver.exe");

        // Chrome options to suppress logs
        ChromeOptions chromeoptions = new ChromeOptions();
        chromeoptions.addArguments("--log-level=3");
        chromeoptions.addArguments("--silent");
        chromeoptions.setExperimentalOption("excludeSwitches", new String[]{"enable-logging"});

        WebDriver driver = new ChromeDriver(chromeoptions);
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(120));

        try {
            logMessage("\n--- STEP 1: Verify Landing Page ---");
            String quizUrl = "file:///C:/Users/shruti/OneDrive/Desktop/quiz_app/index.html";
            driver.get(quizUrl);
            driver.manage().window().maximize();
            
            Thread.sleep(3000);
            
            logMessage("URL: " + driver.getCurrentUrl());
            logMessage("Title: " + driver.getTitle());
            takeScreenshot(driver, "01-landing-page");
            
            System.out.println("\n========================================");
            System.out.println("👉 YOU SELECT CATEGORY AND DIFFICULTY");
            System.out.println("👉 CLICK START QUIZ");
            System.out.println("========================================\n");
            
            logMessage("Waiting for user to start quiz...");
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("question-text")));
            
            logMessage("Quiz started!");
            Thread.sleep(3000);
            takeScreenshot(driver, "02-quiz-started");

            for (int i = 1; i <= 10; i++) {
                System.out.println("\n========================================");
                System.out.println("QUESTION " + i + " of 10");
                System.out.println("👉 SELECT YOUR ANSWER");
                System.out.println("👉 THEN PRESS ENTER IN THIS CONSOLE");
                System.out.println("========================================");
                
                Thread.sleep(1000);
                
                WebElement questionElement = driver.findElement(By.id("question-text"));
                String questionText = questionElement.getText();
                
                // Wait for real question to load (not placeholder)
                int waitCount = 0;
                while (questionText.equals("Question will appear here") && waitCount < 5) {
                    Thread.sleep(1000);
                    questionText = questionElement.getText();
                    waitCount++;
                }
                
                logMessage("\n>>> Question " + i + " <<<");
                logMessage("Question: " + questionText);
                
                List<WebElement> options = driver.findElements(By.className("option"));
                for (int j = 0; j < options.size(); j++) {
                    logMessage("  Option " + (j + 1) + ": " + options.get(j).getText());
                }
                
                System.out.print("Press ENTER after selecting answer: ");
                System.in.read();
                
                Thread.sleep(500);
                List<WebElement> selectedOptions = driver.findElements(By.cssSelector(".option.selected"));
                if (selectedOptions.size() > 0) {
                    String selectedAnswer = selectedOptions.get(0).getText();
                    logMessage("User selected: " + selectedAnswer);
                } else {
                    logMessage("No answer selected");
                }
                
                takeScreenshot(driver, String.format("03-question-%02d", i));
                
                if (i < 10) {
                    System.out.println("\n👉 NOW CLICK 'NEXT' BUTTON");
                    System.out.println("👉 THEN PRESS ENTER IN CONSOLE");
                    System.out.print("Press ENTER after clicking Next: ");
                    System.in.read();
                    Thread.sleep(2000);
                } else {
                    System.out.println("\n👉 NOW CLICK 'SUBMIT' BUTTON");
                    System.out.println("👉 THEN PRESS ENTER IN CONSOLE");
                    System.out.print("Press ENTER after clicking Submit: ");
                    System.in.read();
                }
            }

            logMessage("\n--- STEP 5: Verify Results ---");
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("results-screen")));
            Thread.sleep(3000);

            String finalScore = driver.findElement(By.id("final-score")).getText();
            String percentage = driver.findElement(By.id("score-percentage")).getText();
            String correctCount = driver.findElement(By.id("correct-count")).getText();
            String incorrectCount = driver.findElement(By.id("incorrect-count")).getText();
            
            logMessage("\n=== TEST RESULTS ===");
            logMessage("Final Score: " + finalScore);
            logMessage("Percentage: " + percentage);
            logMessage("Correct: " + correctCount);
            logMessage("Incorrect: " + incorrectCount);
            
            takeScreenshot(driver, "04-final-results");
            
            System.out.println("\n✅ TEST COMPLETED!");
            System.out.println("📁 Screenshots: " + screenshotPath);
            System.out.println("📄 Log: " + reportPath + "test-log.txt");
            
            logMessage("\n========== TEST COMPLETED ==========");

            Thread.sleep(5000);

        } catch (Exception e) {
            logMessage("ERROR: " + e.getMessage());
            e.printStackTrace();
        } finally {
            driver.quit();
            if (logWriter != null) {
                try {
                    logWriter.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    
    private static void takeScreenshot(WebDriver driver, String fileName) {
        try {
            TakesScreenshot screenshot = (TakesScreenshot) driver;
            File srcFile = screenshot.getScreenshotAs(OutputType.FILE);
            File destFile = new File(screenshotPath + screenshotCounter + "-" + fileName + ".png");
            FileUtils.copyFile(srcFile, destFile);
            logMessage("Screenshot: " + fileName);
            screenshotCounter++;
        } catch (Exception e) {
            logMessage("Screenshot failed: " + e.getMessage());
        }
    }
    
    private static void logMessage(String message) {
        System.out.println(message);
        try {
            if (logWriter != null) {
                logWriter.write("[" + getCurrentTimestamp() + "] " + message + "\n");
                logWriter.flush();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    private static String getCurrentTimestamp() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }
}
