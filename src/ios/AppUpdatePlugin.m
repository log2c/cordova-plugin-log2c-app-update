
#import "AppUpdatePlugin.h"
#import <Cordova/CDVViewController.h>

@implementation AppUpdatePlugin

- (void)checkUpdate:(CDVInvokedUrlCommand*)command{

    NSDictionary *downloadInfo  = [command argumentAtIndex:0];
    if (downloadInfo == nil) {
        id result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arguments error!"];
        [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
        return;
    }

    NSString *logs = [downloadInfo objectForKey:@"logs"];
    if (logs == nil) {
        logs = @"";
    }
    BOOL isForceUpdate = [[downloadInfo objectForKey:@"forceUpdate"] boolValue];

    NSString *_url = [downloadInfo objectForKey:@"iOSUrl"];
    if (_url == nil || _url.length == 0) {
        id result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"iOSUrl was empty!"];
        [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
        return;
    }

    NSURL *iOSUrl = [NSURL URLWithString:_url];

    NSString *newAppVersionText = NSLocalizedStringWithDefaultValue(@"app_update_new_version_text", @"Localizable", NSBundle.mainBundle, @"NEW VERSION", nil);
    UIAlertController *alertController = [UIAlertController alertControllerWithTitle:newAppVersionText message:logs preferredStyle:UIAlertControllerStyleAlert];

    logs = [@"\n" stringByAppendingString:logs];

    NSMutableParagraphStyle *paragraphStyle = [[NSMutableParagraphStyle alloc] init];
    [paragraphStyle setAlignment:NSTextAlignmentLeft];


    NSMutableAttributedString *attributedString = [[NSMutableAttributedString alloc] initWithString:logs];
    [attributedString addAttribute:NSParagraphStyleAttributeName value:paragraphStyle range:NSMakeRange(0, [logs length])];

    [alertController setValue:attributedString forKey:@"attributedMessage"];
    NSString *actionUpdateText = NSLocalizedStringWithDefaultValue(@"app_update_update_text", @"Localizable", NSBundle.mainBundle, @"UPDATE", nil);

    UIAlertAction *okAction = [UIAlertAction actionWithTitle:actionUpdateText style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        // success
        [[UIApplication sharedApplication] openURL:iOSUrl options:@{} completionHandler:^(BOOL success) {
            if (isForceUpdate) {
                [self checkUpdate:command];
            }
        }];
    }];

    [alertController addAction:okAction];

    if (!isForceUpdate) {
        NSString *actionIgnoreText = NSLocalizedStringWithDefaultValue(@"app_update_cancel_text", @"Localizable", NSBundle.mainBundle, @"IGNORE", nil);
        UIAlertAction *cancelAction = [UIAlertAction actionWithTitle:actionIgnoreText style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
            id result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"User cancel"];
            [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
        }];
        [alertController addAction:cancelAction];
    }
    [self.viewController presentViewController:alertController animated:YES completion:^{}];
}

// iOS中无需此方法
- (void) setConfig:(CDVInvokedUrlCommand *)command{
    id result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
    return;
}
@end
