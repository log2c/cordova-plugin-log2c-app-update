
#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>


@interface AppUpdatePlugin : CDVPlugin

- (void)checkUpdate:(CDVInvokedUrlCommand*)command;

- (void)setConfig:(CDVInvokedUrlCommand*)command;

@end
