import Foundation

@objc public class Split: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
